import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const submitAdmissionForm = async (formData) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (Math.random() > 0.1) { 
    return { success: true, message: 'Application submitted successfully' };
  } else {
    throw new Error('Failed to submit application');
  }
};

export const submitAdmission = createAsyncThunk(
  'admission/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await submitAdmissionForm(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  formData: {
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gradeApplying: '',
    previousSchool: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
  },
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  successMessage: '',
};

const admissionSlice = createSlice({
  name: 'admission',
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.status = 'idle';
      state.error = null;
      state.successMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitAdmission.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitAdmission.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.successMessage = action.payload.message;
      })
      .addCase(submitAdmission.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { updateFormField, resetForm } = admissionSlice.actions;

export default admissionSlice.reducer;