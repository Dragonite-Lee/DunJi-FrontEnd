import { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function FormInput({ label, ...props }: FormInputProps) {
  return (
    <>
      <label className="text-lg mb-2 mt-4 font-bold">{label}</label>
      <input
        className="outline-0 border-blur border h-12 pl-4 focus:border-yellow"
        {...props}
      />
    </>
  );
}

export default FormInput;
