import React from "react";

function EditName({
  userName,
  setUserName,
  firstName,
  lastName,
  onCancel,
  handleSave,
}) {
  return (
    <div>
      <h1>Edit user info</h1>
      <form className="edit-form">
        <div>
          <label htmlFor="userName">User name: </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={setUserName}
          />
        </div>
        <div>
          <label htmlFor="firstName">First name: </label>
          <input type="text" id="firstName" value={firstName} disabled />
        </div>
        <div>
          <label htmlFor="lastName">Last name: </label>
          <input type="text" id="lastName" value={lastName} disabled />
        </div>
        <div>
          <button className="edit-button" type="button" onClick={handleSave}>
            Save
          </button>
          <button className="edit-button" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditName;
