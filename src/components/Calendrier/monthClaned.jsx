import React from 'react';
import './calend.css';
import PropTypes from 'prop-types';

const arrMois2 = [
  {
    id: '01',
    month: 'Janvier'
  },
  {
    id: '02',
    month: 'Février'
  },
  {
    id: '03',
    month: 'Mars'
  },
  {
    id: '04',
    month: 'Avril'
  },
  {
    id: '05',
    month: 'Mai'
  },
  {
    id: '06',
    month: 'Juin'
  },
  {
    id: '07',
    month: 'Juillet'
  },
  {
    id: '08',
    month: 'Août'
  },
  {
    id: '09',
    month: 'Septembre'
  },
  {
    id: '10',
    month: 'Octobre'
  },
  {
    id: '11',
    month: 'Novembre'
  },
  {
    id: '12',
    month: 'Décembre'
  }
];

class Calend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annee: 2020,
      mois: 0,
      showAppli: false,
      daySelect: 1,
      moiEnCour: [],
      shMounth: true,
      showDay: true,
      dateFinal: 'Error try again...'
    };
    this.addYear = this.addYear.bind(this);
    this.monthClick = this.monthClick.bind(this);
    this.clickEnter = this.clickEnter.bind(this);
    this.showMonth = this.showMonth.bind(this);
    this.notShowMonth = this.notShowMonth.bind(this);
  }

  addYear(nombre) {
    const { annee } = this.state;
    this.setState({ annee: annee + nombre });
    this.setState({ mois: 0 });
  }

  monthClick() {
    this.setState({ shMounth: false });
  }

  clickEnter() {
    const { showAppli } = this.state;
    this.setState({ showAppli: !showAppli });
  }

  showMonth() {
    this.setState({ shMounth: true });
  }

  notShowMonth() {
    this.setState({ shMounth: false });
  }

  render() {
    const { annee, mois, shMounth, showDay, moiEnCour, daySelect } = this.state;
    const { reset, periodeChecked } = this.props;
    return (
      <div className="containCalend border">
        <div className="year">
          <button type="button" className="btnSelect" onClick={() => this.addYear(-10)}>
            &#60;&#60;
          </button>
          <button type="button" className="btnSelect" onClick={() => this.addYear(-1)}>
            &#60;
          </button>
          <p className="noMarge">{annee}</p>
          <button type="button" className="btnSelect" onClick={() => this.addYear(1)}>
            &#62;
          </button>
          <button type="button" className="btnSelect" onClick={() => this.addYear(10)}>
            &#62;&#62;
          </button>
        </div>
        <div className="moisSelect">
          {shMounth ? (
            <div className="mois">
              {arrMois2.map(item => (
                <button
                  type="button"
                  className="calendarWidth formatItem"
                  onMouseEnter={() => this.setState({ mois: item.id })}
                  onClick={this.monthClick}
                >
                  {item.month}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div className="footCalendar">
          <p>
            {`Votre date choisie : ${annee}-${mois}-${daySelect <= 9 ? 0 + daySelect : daySelect}`}
          </p>
        </div>
      </div>
    );
  }
}
Calend.propTypes = {
  reset: PropTypes.func.isRequired,
  periodeChecked: PropTypes.func.isRequired
};

/*
Votre date choisie :
{' '}
{annee}-
{mois < 9 ? <p>0</p> : null}
            {mois + 1}-
{daySelect < 10 ? <p>0</p> : null}
            {daySelect} */
export default Calend;
