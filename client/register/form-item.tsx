interface FormItemProps {
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
}

interface propsType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: propsType) {
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
}

export default FormItem;
