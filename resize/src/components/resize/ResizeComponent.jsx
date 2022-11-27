import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import TableComponent from "../table/TableComponents";
import axios from "axios"
import { useEffect } from "react";
const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    position: "relative",
    wordWrap: "break-word",
};
const style2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    position: "relative",
    wordWrap: "break-word",
};
const style3 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    position: "relative",
    wordWrap: "break-word",
};

export const ResizeComponent = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const [data, setData] = useState("")
    const [apiResponse,setApiResponse]=useState("")
    const [state, setState] = useState({
        width: 200,
        height: 200,
        x: 10,
        y: 10,
        data1: "HTML1"
    })
    const [state2, setState2] = useState({
        width: 500,
        height: 200,
        x: 10,
        y: 10,
        data2: "HTML2"
    })
    const [state3, setState3] = useState({
        width: "80%",
        height: 200,
        x: 10,
        y: 120,
        data3: "HTML3",
    })



    const handleUpdate = () => {
setIsEdit(true)
    }
    const handleAdd = () => {
        setState({ data1: "" })
        setState2({ data2: "" })
        setState3({ data3: "" })
        setIsAdd(true)
    }

    const getDataFromApi=()=>{
        axios.get("http://localhost:5000/data/").then((res)=>setApiResponse(res.data.dataAdded.data))
    }

    useEffect(()=>{
        getDataFromApi()
    },[apiResponse])
    const handleSubmit = () => {
setIsAdd(false)
axios.post("http://localhost:5000/data/add",{
    data,
   
})
    .then((res) => {
        console.log(res)
        if(res?.status==201){
           
            alert("Data added successfully")
           
        }else{
            alert("Something went wrong")
        }
    })
    }
    return (
        <Grid sx={{ position: "absolute" }} container spacing={2}>
            <Grid item xs={12} md={4}>

                <Rnd
                    style={style}
                    size={{ width: state.width, height: state.height }}
                    position={{ x: state.x, y: state.y }}
                    onDragStop={(e, d) => {
                        setState({ x: d.x, y: d.y });
                    }}

                    onResizeStop={(e, direction, ref, delta, position) => {
                        setState({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position
                        });
                    }}
                >
                    {state?.data1}
                </Rnd>
            </Grid>
            <Grid item xs={12} md={8}>
                {/* <Paper elevation={5}> */}

                <Rnd
                    style={style2}
                    size={{ width: state2.width, height: state2.height }}
                    position={{ x: state2.x, y: state2.y }}
                    onDragStop={(e, d) => {
                        setState2({ x: d.x, y: d.y });
                    }}

                    onResizeStop={(e, direction, ref, delta, position) => {
                        setState2({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position
                        });
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{ textAlign: "fit" }}
                    >
                        {state2?.data2}
                    </Typography>
                </Rnd>
                {/* </Paper> */}
            </Grid>
            <Grid item xs={12} md={12}>
                {/* <Paper elevation={5}> */}

                <Rnd
                    style={style3}
                    size={{ width: state3.width, height: state3.height }}
                    position={{ x: state3.x, y: state3.y }}
                    onDragStop={(e, d) => {
                        setState3({ x: d.x, y: d.y });
                    }}

                    onResizeStop={(e, direction, ref, delta, position) => {
                        setState3({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position
                        });
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{ textAlign: "fit" }}
                    >
                        {state3?.data3}
                    </Typography>
                </Rnd>
                {/* </Paper> */}
            </Grid>
            <Grid xs={12} md={12} sx={{ position: "relative", marginTop: "10em", width: "90%", }}>
                {/* <TableComponent/> */}
                <div style={{ width: "40%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
                    {isAdd ?
                        <Paper sx={{padding:"3em"}} elevation={5}>
                            <TextField label="add data" onChange={(e)=>setData(e.target.value)} value={data} variant="outlined" />
<br/>
                            <Button sx={{marginTop:"2em"}} onClick={handleSubmit} variant="contained">
                                SUBMIT
                            </Button>
                        </Paper>
                        :
                        <>
                            <Button variant="contained"
                                onClick={handleUpdate}
                            >
                                UPDATE
                            </Button>
                            <Button
                                onClick={handleAdd}

                                variant="contained">
                                ADD
                            </Button>
                        </>
                    }

                </div>
            </Grid>
        </Grid>
    );

}


