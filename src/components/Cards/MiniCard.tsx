interface MINICARD {
  label: string;
  img: string;
}

function MiniCard({ label, img }: MINICARD) {
  return (
    <div className="box">
      <div className="logo">
        <img src={img} alt="" />
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

export default MiniCard;
