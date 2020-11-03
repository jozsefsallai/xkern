import { Job } from "./JobsList";
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useState } from "react";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import clsx from "clsx";

export interface JobApplicationFormFields {
  name: string;
  email: string;
  resume: File;
}

export interface JobApplicationFormServerResponse {
  code: number;
  message: string;
  payload?: any;
}

export interface JobApplicationFormParams {
  job: Job;
  send(jobTitle: string, fields: JobApplicationFormFields): Promise<JobApplicationFormServerResponse>;
}

const JobApplicationForm = ({ job, send }: JobApplicationFormParams) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  const [ success, setSucess ] = useState(false);
  const [ error, setError ] = useState('');
  const [ sending, setSending ] = useState(false);

  const [ jiggle, setJiggle ] = useState(false);

  const jiggleForm = () => {
    setJiggle(true);

    setTimeout(() => {
      setJiggle(false);
    }, 500);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSending(true);
    setError('');
    setSucess(false);

    const res = await send(job.title, {
      name,
      email,
      resume: acceptedFiles[0]
    });

    setSending(false);

    if (res.code === 0) {
      setSucess(true);
      return;
    }

    setError(res.message);
    jiggleForm();
  };

  return (
    <>
      {!success && <form className="secondary-colors" onSubmit={handleSubmit}>
        <div className={clsx({ jiggle })}>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              id="name"
              disabled={sending}
              onChange={e => setName(e.currentTarget.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="you@are.awesome"
              id="email"
              disabled={sending}
              onChange={e => setEmail(e.currentTarget.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="resume">Resume:</label>

            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps({ name: 'resume', multiple: false, required: true })} />

              {!acceptedFiles.length && (
                <p>
                  <FontAwesomeIcon icon={faPaperclip} />
                Drag a file here or click to select one.
                </p>
              )}

              {acceptedFiles.length > 0 && (
                <p>
                  <FontAwesomeIcon icon={faPaperclip} />
                  <strong>{acceptedFiles[0].name}</strong>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="input-group buttons">
          <button type="submit" className="single-button" disabled={sending}>Submit</button>
          {sending && <LoadingSpinner color="#fff" />}
          {error.length > 0 && <small className="form-error">{error}</small>}
        </div>
      </form>}

      {success && (
        <div className="success">
          <p>Your application has been sent successfully.</p>
        </div>
      )}
    </>
  );
};

export default JobApplicationForm;
