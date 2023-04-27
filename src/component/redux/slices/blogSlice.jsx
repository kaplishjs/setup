import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchBlogs = createAsyncThunk('login/fetchBlogs', async(id, thunkAPT)=>{
    try{
        console.log(id)
        const rawResponse = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            // body: JSON.stringify(id)
          });
          const content = await rawResponse.json();
          console.log(content)
          return content
    }
    catch(err){
        console.log(err)
        return thunkAPT.rejectWithValue({
            err:"not woking"
        })
    }
    })

    export const blogSlice = createSlice({
        name:"blog",
        initialState:{
            blogData:[],
            isErr:false,
            isFetch:false
        },
        extraReducers:(blogData)=>{
            blogData.addCase(fetchBlogs.pending, (state,action) =>{
                state.isFetch = true
        }),
        blogData.addCase(fetchBlogs.fulfilled, (state,action) =>{
            state.isFetch = false,
            state.blogData = action.payload
        }),
        blogData.addCase(fetchBlogs.rejected, (state,action) =>{
            state.isFetch = false,
            state.isErr = true
        })
        }
    }) 

    export const{blog} = blogSlice.actions
    export default blogSlice.reducer 