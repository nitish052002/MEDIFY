interface Doctor {
  name: string;
  role: string;
  avatar: string;
}

function PillCard({ name, role, avatar }: Doctor) {
  return (
    <div className="pillcontainer">
      <div className="img">
        <img src={avatar} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="role">{role}</div>
    </div>
  );
}

export default PillCard;
