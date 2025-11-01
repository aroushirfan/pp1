import visaLogo from './assets/images/visa.png';
import masterLogo from './assets/images/master-card.svg';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    height: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'sans-serif',
  };

  const logo = type === 'Visa' ? visaLogo : masterLogo;
  const hiddenNumber = '•••• •••• •••• ' + number.slice(-4);

  return (
    <div style={cardStyle}>
      <div style={{ textAlign: 'right' }}>
        <img src={logo} alt={type} style={{ width: '60px' }} />
      </div>

      <div style={{ fontSize: '1.3em', letterSpacing: '2px' }}>
        {hiddenNumber}
      </div>

      <div style={{ fontSize: '0.9em' }}>
        <div>
          Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear % 100} &nbsp;
          {bank}
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;