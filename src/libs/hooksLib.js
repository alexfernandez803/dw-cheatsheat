import { useState } from "react";

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);
  
  return [
    fields,
    function(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      setValues({
        ...fields,
        [target.id]: value
      });
    }
  ];
}

