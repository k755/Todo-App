import { useState } from 'react'
import axios from 'axios'
import { 
  Box, 
  Button, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Typography, 
  Paper,
  Grid,
  FormHelperText
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const NewTodo = () => {
  const [todoCreate, setTodoCreate] = useState({
    todoName: '',
    todoDescription: '',
    todoPriority: 'High',
    todoStatus: false,
  })

  const [errors, setErrors] = useState({
    todoName: false,
    todoDescription: false
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    const newErrors = {
      todoName: todoCreate.todoName.trim() === '',
      todoDescription: todoCreate.todoDescription.trim() === ''
    }
    
    setErrors(newErrors)
    
    if (newErrors.todoName || newErrors.todoDescription) {
      return
    }

    try {
      const res = await axios.post("/api/todo/create", todoCreate)
      console.log("API Response:", res.data)
      // Reset form after successful submission
      setTodoCreate({
        todoName: '',
        todoDescription: '',
        todoPriority: 'High',
        todoStatus: false,
      })
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          Create New Todo
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Todo Name"
                variant="outlined"
                value={todoCreate.todoName}
                onChange={(e) => setTodoCreate({...todoCreate, todoName: e.target.value})}
                error={errors.todoName}
                helperText={errors.todoName ? "Todo name is required" : ""}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                value={todoCreate.todoDescription}
                onChange={(e) => setTodoCreate({...todoCreate, todoDescription: e.target.value})}
                error={errors.todoDescription}
                helperText={errors.todoDescription ? "Description is required" : ""}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select
                  value={todoCreate.todoPriority}
                  label="Priority"
                  onChange={(e) => setTodoCreate({...todoCreate, todoPriority: e.target.value})}
                >
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={todoCreate.todoStatus}
                  label="Status"
                  onChange={(e) => setTodoCreate({...todoCreate, todoStatus: e.target.value === 'true'})}
                >
                  <MenuItem value={false}>Incomplete</MenuItem>
                  <MenuItem value={true}>Complete</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                fullWidth
                sx={{ py: 1.5 }}
              >
                Create Todo
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  )
}

export default NewTodo