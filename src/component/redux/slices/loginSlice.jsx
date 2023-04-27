import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const loginSlice = createSlice({
    name:"login",
    initialState:{
        email:"",
        password:"",
        firstName:"",
        lastName:"",
        phoneNumber:"",
        // blogs:{
        //     blogsData:[],
        //     isErr:false,
        //     isFetch:false,
        // }
    },
    reducers:{
        login:(state, action)=>{
            
            console.log("state", state)
            console.log(action)
            state.email = action.payload.email
            state.password = action.payload.password
        },
        register:(state, action)=>{
            state.email = action.payload.email
            state.password = action.payload.password
        }
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(fetchBlogs.pending, (state,action) =>{
    //             state.blogs.isFetch = true
    //     }),
    //     builder.addCase(fetchBlogs.fulfilled, (state,action) =>{
    //         state.blogs.isFetch = false,
    //         state.blogs.blogsData = action.payload
    //     }),
    //     builder.addCase(fetchBlogs.rejected, (state,action) =>{
    //         state.blogs.isFetch = false,
    //         state.blogs.isErr = true
    //     })
    // }
})

export const {login} =loginSlice.actions
export default loginSlice.reducer

