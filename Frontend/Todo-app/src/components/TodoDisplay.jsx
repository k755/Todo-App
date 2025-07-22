import { Box, Card, CardContent, Typography, Button, Chip, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoDisplay = (props) => {
    const handleDelete = () => {
        props.onDelete(props._id);
    };

    // Determine color based on priority
    const getPriorityColor = () => {
        switch ((props.todoPriority || '').toLowerCase()) {
            case 'high': return 'error';
            case 'medium': return 'warning';
            case 'low': return 'success';
            default: return 'default';
        }
    };

    // Determine status text and color
    const getStatusInfo = () => {
        if (props.todoStatus === true || props.todoStatus === 'completed') {
            return { text: 'Completed', color: 'success' };
        } else if (props.todoStatus === false || props.todoStatus === 'pending') {
            return { text: 'Incomplete', color: 'error' };
        } else if (props.todoStatus === 'in progress') {
            return { text: 'In Progress', color: 'warning' };
        }
        return { text: 'No status', color: 'default' };
    };

    const statusInfo = getStatusInfo();

    return (
        <div> 
        <Box width="100%" padding={1}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {props.todoName}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {props.todoDescription}
                    </Typography>
                    
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        <Chip 
                            label={props.todoPriority || 'No priority'} 
                            color={getPriorityColor()} 
                            size="small" 
                        />
                        <Chip 
                            label={statusInfo.text} 
                            color={statusInfo.color} 
                            size="small" 
                        />
                    </Stack>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button 
                            variant="outlined" 
                            color="error" 
                            startIcon={<DeleteIcon />}
                            onClick={handleDelete}
                            size="small"
                        >
                            Delete
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
        </div>
    );
};

export default TodoDisplay;