import { Stack } from '@mui/material';
import { categories } from '../utils/constants';


const selectedCategory = 'New';
const SideBar = () => (
    <Stack
    direction="row"
    sx={{overflowY:"auto",
    height:{sx:'auto', md:'95%'},flexDirection: {md:'column'},
    }}>
        {categories.map((category) => (
        // for each category will return a button
        <button className="category-btn"
                style={{
                    // if category.name is the same with selectedCategory then the color should be red
                    // if I select a button then the color should be red and text will be white
                    background: category.name === selectedCategory && '#FC1503',
                    color: 'white'
                }}
                key={category.name}>
            {/* if category is selected then the icon will be white */}
            <span style={{color:category.name===selectedCategory ? 'white': 'red', marginRight:'15px'}}>
            {category.icon}</span>
            <span style={{opacity:category.name===selectedCategory ? '1' : '0.8'}}>{category.name}</span>
        </button>
    ))}
    </Stack>
)

export default SideBar