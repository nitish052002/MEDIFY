interface Button {
  label: string;
  width?: number;
}

function Button({ label, width }: Button) {
  return <button style={{ }} className="custom-btn">{label}</button>;
}

export default Button;
