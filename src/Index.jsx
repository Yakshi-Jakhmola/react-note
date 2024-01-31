import React from 'react';

const name = [
    {Name : "yakshi"},
    {Company: "Brandingwaale"},
    {age: 21}
]

function Index() {
  return (
    <div>
    {name.map((i) =>(<div>{i.Name}</div>)
        
    )}
    </div>
  )
}

export default Index