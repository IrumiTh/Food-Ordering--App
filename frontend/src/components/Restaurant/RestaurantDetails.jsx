import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';

const categories=[
    "pizza",
    "biryani",
    "burger",
    "chicken",
    "rice"

]

const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian only",value:"vegetarian"},
    {label:"Non-Vegetarian",value:"non_vegetarian"},
    {label:"Seasonal",value:"seasonal"},
]

const menu=[1,1,1,1]

const RestaurantDetails = () => {
    const [foodType,setFoodType]=useState("all");
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }
  return (
    <div className='px-5 lg:px-20'>

        <section>
            <h3 className='text-gray-500 py-2 mt-10' >Home/Sri Lanka/Theesh Foods/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_1280.jpg' alt=''/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src='https://media.istockphoto.com/id/1365312463/photo/modern-cafe-restaurant-interior-with-yellow-chair-against-window-with-city-view.jpg?s=2048x2048&w=is&k=20&c=tyFPYgSaYJ8koiPztLC1T3EucPPwTF5YXCOn-7GP_TA=' alt=''/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src='https://media.istockphoto.com/id/1357951534/photo/3d-render-of-tea-and-cafe-shop.jpg?s=2048x2048&w=is&k=20&c=oo8Cwu3yqelvDs3Vs1nqDMr5h6zssksA3NgUvhsWWHg=' alt=''/>
                    </Grid>
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>
                    Theesh Foods
                </h1>
                <p className='text-gray-500 mt-1'>

                    <span>Theesh Food Restaurant offers a delightful dining experience with a focus on fresh, high-quality ingredients and a diverse menu catering to all tastes. Whether you're craving traditional favorites or modern culinary creations, we combine authentic flavors with exceptional service to create memorable meals for every occasion.</span>
                </p>
                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon/>
                        <span>Theesh Food, Sri Lanka </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <CalendarTodayIcon/>
                        <span>Mon-Sun: 9:00 AM -9:00 PM</span>
                    </p>

                </div>
                

            </div>
        </section>

        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter'>
                <div className='box space-y-5 lg:sticky top-28 p-5 shadow-md'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                            Food Type
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {foodTypes.map((item)=>(
                                <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                                ))}

                            </RadioGroup>

                        </FormControl>
                    </div>
                    <Divider/>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom: "1rem"}}>
                            Food Category
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {categories.map((item)=>(
                                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                ))}

                            </RadioGroup>

                        </FormControl>
                    </div>

                </div>

            </div>
            <div className='space-y-5 lg:w-[80%] lg:pl-10 '>
                {
                    menu.map((item)=><MenuCard/>)
                }
            </div>

        </section>
      
    </div>
  )
}

export default RestaurantDetails
