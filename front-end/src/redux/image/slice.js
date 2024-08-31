import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";

const initialState = {
  status: "not_sended",
  images: [],
  url: null,
  error: null,
};

export const getOneImage = createAsyncThunk(
  "uploadImage/getOneImage",
  async (id) => {
    return await httpGet(`${baseUrl}/animalImage/${id}`);
  }
);

export const getImages = createAsyncThunk(
  "uploadImage/getImages",
  async (_,{getState}) => {
    return await httpGet(`${baseUrl}/pictures`, 
    //   {
    //   headers: {
    //     Authorization: `${getState().userReducer.token}`
    //   }
    // }
  );
  }
);
function fullfillImagesReducer(state, action) {
  //criaçao de um novo estado de objeto com os pedidos requisitados
  return {
    ...state,
    status: "saved",
    images: action.payload,
  };
}

export const addImages = createAsyncThunk(
  "uploadImage/addImages",
  async (animalImage, { getState }) => {
    // const config = {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     //   ...(animalImage && { 'Content-Type': 'multipart/form-data' })
    //     }
    //   };
//     console.log(animalImage)
//     const formData = new FormData();
// formData.append('file', animalImage);
    return await httpPost(`${baseUrl}/pictures`, animalImage
    //     {
    //   headers: {
        // Authorization: `${getState().userReducer.token}`
        // ContentType: 'application/json',
        // ...(animalImage && { 'Content-Type': 'multipart/form-data' })
    //     }
    // }
);
  }
);

export const deleteImages = createAsyncThunk(
  "uploadImage/deleteImages",
  async (animalImageId, { getState }) => {
    await httpDelete(`${baseUrl}/pictures/${animalImageId}`, 
    //     {
    //   headers: {
    //     Authorization: `${getState().userReducer.token}`
    //   }
    // }
);
    return animalImageId;
  }
);
export const updateImages = createAsyncThunk(
  "uploadImage/updateImages",
  async (request, { getState }) => {
    return await httpPut(`${baseUrl}/pictures/${request.id}`, request, 
    //     {
    //   headers: {
    //     Authorization: `${getState().userReducer.token}`
    //   }
    // }
    );
  }
)

const imagesAnimalSlice = createSlice({
  name: "imagesAnimal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addImages.fulfilled, fullfillImagesReducer)
      .addCase(addImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.status = "saved";
        state.images = action.payload;
      })
      .addCase(getImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteImages.fulfilled, (state, action) => {
        state.status = "deleted";
      })
      .addCase(getOneImage.fulfilled, (state, action) => {
        state.status = "loaded";
       
      })
      .addCase(getOneImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOneImage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        
      })
      .addCase(updateImages.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(updateImages.fulfilled, (state, action) => {
        state.status = "saved";
      })
  },
});


export default imagesAnimalSlice.reducer;