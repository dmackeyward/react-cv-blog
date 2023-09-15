import { useState, useEffect } from "react"
import classes from "./Skills.module.css"
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

const Skills = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/react-cv-blog/data/data.json',
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <List className={classes.list}>
      {data.map((item, index) => (
        <ListItem key={item.id} className={`${classes.item} ${index % 2 === 0 ? classes.evenItem : classes.oddItem}`}>
          <ListItemIcon>
            <img
              src={`${process.env.PUBLIC_URL}/images/${item.imageFileName}.jpg`}
              alt={item.skill}
              className={classes.image}
            />
          </ListItemIcon>
          <ListItemText className={classes.text}>
            <h1>{item.skill}</h1>
            <p>{item.description}</p>
            {item.url !== undefined && item.url !== "" && (<a href={item.url} target="_blank" rel="noopener noreferrer">
              Github Repo
            </a>)}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

export default Skills