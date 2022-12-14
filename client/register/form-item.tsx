interface FormItemProps {
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
}

function FormItem({ label, type, placeholder }: FormItemProps) {
  return (
    <>
      <label className="text-lg mb-2 mt-4 font-bold">{label}</label>
      <input
        className="outline-0 border-blur border h-12 pl-4 focus:border-yellow"
        placeholder={placeholder}
        type={type}
      />
    </>
  );
}

export default FormItem;
