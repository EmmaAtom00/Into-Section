import './Navbar.css';
import Logo from './images/logo.svg';
import Menu from './images/icon-menu.svg';
import Arrowup from './Arrowup';
import Close from './Close';
import nav1 from './images/icon-todo.svg'
import nav2 from './images/icon-calendar.svg'
import nav3 from './images/icon-reminders.svg'
import nav4 from './images/icon-planning.svg'
import Arrowdown from './Arrowdown';

export default function Navbar() {
  return (
    <nav>
      <div className='parent'>
        <div className='leftNav'>
          <img src = {Logo} alt='Logo' className='logo'/>
          <div className='leftB'>
          <div className='dropdown'>
              <div className='features'>
                <div className='dropD' onClick={drop}>
                  <p>Features</p>
                  <Arrowdown className='arrdown'/>
                  <Arrowup className='arrup'/>
                </div>
                <div className='dropD1' id='lgSc'>
                  <div className='dropDL'>
                    <img src={nav1} alt='todo'/>
                    <a href='./index.html'>Todo List</a>
                  </div>
                  <div className='dropDL'>
                    <img src={nav2} alt='calender'/>
                    <a href='./index.html'>Calendar</a>
                  </div>
                  <div className='dropDL'>
                    <img src={nav3} alt='reminder'/>
                    <a href='./index.html'>Reminders</a>
                  </div>
                  <div className='dropDL'>
                    <img src={nav4} alt='planning'/>
                    <a href='./index.html'>Planning</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='dropdown' id='company'>
              <div className='dropD0' onClick={drop2}>
                <p>Company</p>
                <div className='arrdown1'>
                  <Arrowdown/>
                </div>
                <div className='arrup1'>
                  <Arrowup />
                </div>
              </div>
              <div className='dropD01' id='lgSc1'>
                  <div className='dropDL'>
                    <a href='./index.html'>History</a>
                  </div>
                  <div className='dropDL'>
                    <a href='./index.html'>Our Team</a>
                  </div>
                  <div className='dropDL'>
                    <a href='./index.html'>Blog</a>
                  </div>
                </div>
            </div>
            <a href='./index.html'>Careers</a>
            <a href='./index.html'>About</a>
          </div>
        </div>




        <div className='righttNav'>
          <img src = {Menu} alt='Logo' className='hamburger' onClick={ToggleMenu}/>
          <div className='leftT'>
            <div className= 'closeMenu' onClick={ToggleMenu}>
              <Close /> 
            </div>



            <div className='dropdown'>
              <div className='features'>
                <div className='dropD' onClick={drop21}>
                  <p>Features</p>
                  <Arrowdown className='arrdown'/>
                  <Arrowup className='arrup'/>
                </div>
                <div className='dropD12'>
                  <div className='dropDL'>
                    <img src={nav1} alt='todo'/>
                    <a href='./index.html'>Todo List</a>
                  </div>
                  <div className='dropDL'>
                    <img src={nav2} alt='calender'/>
                    <a href='./index.html'>Calendar</a>
                  </div>
                  <div className='dropDL'>
                    <img src={nav3} alt='reminder'/>
                    <a href='./index.html'>Reminders</a>
                  </div>
                  <div className='dropDL'>
                    <img src={nav4} alt='planning'/>
                    <a href='./index.html'>Planning</a>
                  </div>
                </div>
              </div>
            </div>



            <div className='dropdown' id='company'>
              <div className='dropD0' onClick={drop22}>
                <p>Company</p>
                <div className='arrdown1'>
                  <Arrowdown/>
                </div>
                <div className='arrup1'>
                  <Arrowup />
                </div>
              </div>
              <div className='dropD012'>
                  <div className='dropDL'>
                    <a href='./index.html'>History</a>
                  </div>
                  <div className='dropDL'>
                    <a href='./index.html'>Our Team</a>
                  </div>
                  <div className='dropDL'>
                    <a href='./index.html'>Blog</a>
                  </div>
                </div>
            </div>



            <a href='./index.html'>Careers</a>
            <a href='./index.html'>About</a>
            <div className='access'>
              <a href='./index.html' className='login'>Login</a>
              <a href='./index.html' className='reg' id='regD'>Register</a>
            </div>
          </div>
          <div className='rightB'>
            <a href='./index.html'>Login</a>
            <a href='./index.html' className='reg'>Register</a>
          </div>
        </div>
      </div>
    </nav>
  )
};



function ToggleMenu() {
  const main = document.querySelector('.leftT')
  main.classList.toggle('close');
}

function drop() {
  const dropD = document.querySelector('.dropD1');
  const arrdown = document.querySelector('.arrdown');
  const arrdup = document.querySelector('.arrup');
  dropD.classList.toggle('open');
  arrdown.classList.toggle('open');
  arrdup.classList.toggle('closearrow');
  console.log(dropD);
}

function drop2() {
  const dropD = document.querySelector('.dropD01');
  const arrdown1 = document.querySelector('.arrdown1');
  const arrdup1 = document.querySelector('.arrup1');
  dropD.classList.toggle('open');
  arrdown1.classList.toggle('open');
  arrdup1.classList.toggle('closearrow');
  console.log(dropD)
}







function drop21() {
  const dropD = document.querySelector('.dropD12');
  const arrdown = document.querySelector('.arrdown');
  const arrdup = document.querySelector('.arrup');
  dropD.classList.toggle('open');
  arrdown.classList.toggle('open');
  arrdup.classList.toggle('closearrow');
  console.log(dropD);
}

function drop22() {
  const dropD = document.querySelector('.dropD012');
  const arrdown1 = document.querySelector('.arrdown1');
  const arrdup1 = document.querySelector('.arrup1');
  dropD.classList.toggle('open');
  arrdown1.classList.toggle('open');
  arrdup1.classList.toggle('closearrow');
  console.log(dropD)
}
