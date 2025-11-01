const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: (r + g + b) / 3 < 128 ? 'white' : 'black',
    border: '1px solid #000',
    padding: '30px',
    margin: '10px 0',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    borderRadius: '6px',
  };

  const toHex = (v) => v.toString(16).padStart(2, '0');
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return (
    <div style={divStyle}>
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
      <p>{hex}</p>
    </div>
  );
};

export default BoxColor;