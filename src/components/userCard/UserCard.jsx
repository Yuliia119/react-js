import './UserCard.css'
// через деструктуризацию разделяем передаваемый из родительского компонента объект props с данными на переменные с таким же названием, как и у ключей в передаваемом объекте

function UserCard({name,age,hobby}) {
 
  
    return (
      <div className='user-card'>
      <h4>Name: {name}</h4>
      <p>Age: {age}</p>
      <p>{hobby ? "Hobby: " + hobby : 'No hobby 🙅‍♂️'}</p>
      </div>
    );
  }
  
  export default UserCard;