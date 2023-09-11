import React, { useState } from "react";
import Button from "@mui/material/Button";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const StatusCell = ({ value, onStatusChange, onSave }) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);

  const handleStatusChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave(selectedValue);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <RadioGroup
            name="status"
            value={selectedValue}
            onChange={handleStatusChange}
          >
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="inactive"
              control={<Radio />}
              label="Inactive"
            />
            <FormControlLabel
              value="Appending"
              control={<Radio />}
              label="Appending"
            />
          </RadioGroup>
          <Button onClick={handleSave}>Save</Button>
        </div>
      ) : (
        <div>
          <span>{selectedValue}</span>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        </div>
      )}
    </div>
  );
};

export default StatusCell;
