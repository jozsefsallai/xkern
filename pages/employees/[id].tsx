import EmployeeData, { Employee } from '@/components/employees/EmployeeData';
import LoadingSpinner from '@/components/loading-spinner/LoadingSpinner';
import Meta from '@/components/Meta';
import Page from '@/components/page/Page';

import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';

interface ServerResponse {
  code: number;
  message: string;
  data?: Employee;
}

const EmployeeDataPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [ title, setTitle ] = useState('Server Secret Required');
  const [ subtitle, setSubtitle ] = useState('Please provide the server secret.');

  const [ employeeData, setEmployeeData ] = useState<null | Employee>(null);
  const [ secret, setSecret ] = useState('');

  const [ sending, setSending ] = useState(false);
  const [ error, setError ] = useState('');

  const authorize = async (e: FormEvent) => {
    e.preventDefault();

    setSending(true);
    setError('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_EMPLOYEE_API_ENDPOINT}/${id}?secret=${secret}`);
      const json: ServerResponse = await res.json();

      if (json.code === 0) {
        setEmployeeData(json.data);
        setSending(false);

        setTitle(`${json.data.lastName}, ${json.data.firstName} ${json.data.middleName || ''}`);
        setSubtitle(`Employee #${json.data.uniqueId}`);
        return;
      }

      setError(json.message ?? 'Internal Server Error');
      setSending(false);
    } catch (err) {
      console.error(err);
      setError('Internal Server Error');
    }
  };

  return (
    <Page title={title} subtitle={subtitle}>
      <Meta
        title={title}
        description={subtitle}
        url={`/employees/${id}`}
      />

      {!employeeData && (
        <form onSubmit={authorize}>
          <div className="input-group">
            <label htmlFor="secret">Server secret:</label>
            <input
              type="password"
              id="secret"
              name="secret"
              disabled={sending}
              onChange={e => setSecret(e.currentTarget.value)}
            />
          </div>

          <div className="input-group buttons">
            <button type="submit" className="single-button" disabled={sending}>Submit</button>
            {sending && <LoadingSpinner color="#fff" />}
            {error.length > 0 && <small className="form-error">{error}</small>}
          </div>
        </form>
      )}

      {employeeData && <EmployeeData employee={employeeData} />}
    </Page>
  );
};

export default EmployeeDataPage;
