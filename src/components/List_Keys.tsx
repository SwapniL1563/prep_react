// List - means to show multiple items on screen 
// In react, we often need to render multiple list of items(array of data);
// eg. shopping app with list of product 

// Keys - special attribute that helps react uniquely identify each item that changes/add/removed from list
// It helps in react optimise re-rendering - as without keys react may confuse element and cause bgs

// here we use .map() to loop through array and return jsx for each item
function StudentList(){
    const names = ["Swapnil","Rahul","Neha"];

    return (
        <ul>
          {
            names.map((name,index)=> (
            <li key={index}>{name}</li>
            ))
          }
        </ul>
    )
}

export default StudentList;