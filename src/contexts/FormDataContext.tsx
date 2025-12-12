import React, { createContext, useState, ReactNode } from 'react';

interface FormDataContextProps {
  formData: Record<string, any>;
  setFormData: (data: Record<string, any>) => void;
}

export const FormDataContext = createContext<FormDataContextProps>({
  formData: {},
  setFormData: () => {},
});

interface Props {
  children: ReactNode;
}

export const FormDataProvider: React.FC<Props> = ({ children }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
