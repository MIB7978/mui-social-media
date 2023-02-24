import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon } from '@mui/icons-material'
import { Box } from '@mui/system'
import styled from '@emotion/styled'
import { EmojiEmotions, Image, VideoCameraBack, PersonAdd, CalendarMonth } from '@mui/icons-material/';
const StyleModel = styled(Modal)({
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'center'

})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px'

})
export const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip title='post'
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 },
                }}
                onClick={(e) => setOpen(true)}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyleModel
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box height={280} width={400} bgcolor={"background.default"} color={"text.primary"} p={6} borderRadius={5}>
                    <Typography variant='h6' textAlign={'center'} color='gray'>
                        Create New Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src={"https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                            sx={{ height: '30px', width: '30px', mb: '6px', cursor: 'pointer' }}
                        />
                        <Typography variant='h6' >John Doe</Typography>
                    </UserBox>

                    <TextField
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={3}
                        placeholder="Default Value"
                        variant="standard"
                        sx={{ width: '100%' }}
                    />

                    <Stack direction={'row'} gap={1} mt={2} mb={2}>
                        <EmojiEmotions color="primary" />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button
                            sx={{
                                width: '20%'
                            }}
                        >
                            <CalendarMonth />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyleModel>
        </>
    )
}
