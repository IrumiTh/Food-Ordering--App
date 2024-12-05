import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const ingredients=[
//     {
//         category:"Nuts and seeds",
//         ingredients:"Cashews"
//     },
//     {
//         category:"Protein",
//         ingredients:"Protein"
//     },
//     {
//         category:"Protein",
//         ingredients:"Bacon strips"
//     }
// ]

const demo=[
  {
      category:"Nuts and seeds",
      ingredients:["Cashews"]
  },
  {
      category:"Protein",
      ingredients:["Ground beef","Bacon strips"]
  }
]

const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log("value")

  }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover' src='https://media.istockphoto.com/id/1775171327/photo/cheeseburger.jpg?s=612x612&w=is&k=20&c=Pznpmu8vDJXcYzwjCIYp2oeB0SlqVZMA_WWoXNlNnyc=' alt=''/>
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>
                        Burger
                    </p>
                    <p>LKR 700</p>
                    <p className='text-gray-400'>
                        Nice burger with cheesy taste
                    </p>

                </div>
            </div>
            
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {
                demo.map((item)=>
                  
                  <div>
                    <p>{item.category}</p>
                    <FormGroup>
                      {item.ingredients.map((item)=>
                      <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />} label={item} />
                      )}
                      
                    </FormGroup>
                  </div>
                
                )
              }

            </div>

            <div className='pt-5'>
              <Button variant='contained' disabled={false} type='submit'>{true?"Add to Cart":"Out of stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard
