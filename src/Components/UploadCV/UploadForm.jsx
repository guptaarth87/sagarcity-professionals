import React, { useState } from 'react';
import './UploadForm.css';
import { storage, db } from '../../_helpers/FirebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

export default function UploadForm() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    cv: null,

  });

  const [uploadProgress, setUploadProgress] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      cv: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.cv) {
      alert('Please upload a CV');
      return;
    }

    const storageRef = ref(storage, `cvs/${formData.cv.name}`);
    const uploadTask = uploadBytesResumable(storageRef, formData.cv);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        await addDoc(collection(db, 'cvData'), {
          email: formData.email,
          phone: formData.phone,
          cvURL: downloadURL,
          createdAt: new Date().toLocaleString()
        });

        alert('CV uploaded successfully');
        setFormData({
          email: '',
          phone: '',
          cv: null,
        });
        setUploadProgress(0);
      }
    );
  };

  return (
    <>
    <br></br>
    <br></br>
    <div className="upload-form-container theme-grad">
      <h2 className="form-title">Upload Your CV</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cv">Upload CV</label>
          <input
            type="file"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />
        </div>
        {uploadProgress > 0 && (
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
