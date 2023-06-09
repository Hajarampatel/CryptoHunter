import { makeStyles } from '@material-ui/core'
import React from 'react'

function SelectButton({children,selected,onClick}) {
    const useStyles = makeStyles( {
      selectbutton: {
         border: '1px solid gold',
         borderRadius: 5,
         padding: 10,
         paddingLeft: 10,
         paddingRight: 20,
         cursor: 'pointer',
         backgroundColor: selected? "gold" : "",
         color: selected ? "black" : "",
         fontWeight: selected ? 700:500,

         "&:hover" : {
             backgroundColor: 'gold',
             color: 'black',
         },
         width: "22%",
      }
    });

    const classes = useStyles();
  return (
    <span onClick={onClick}
      className={classes.selectbutton}
     >{children}</span>
  )
}

export default SelectButton