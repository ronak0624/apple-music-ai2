# Apple Lightweight Music Catalog

## Transcription Writeup

If I were to implement a transcription feature into this application, I would likely use an icon, which would open 
a larger tab panel. This would contain a line by line, autoscrolling transcription of the audio or video file. When 
the transcription autoscrolls, it would then highlight the current line in a different color (blue is the scheme I chose
for this project, but it could be tailored to any theme). 
    In terms of loading the transcription, I would have two options, 
and the choice between them would depend on the way I am receiving the transcription. If it is already stored in a file, 
or in the result of an API call, and as long as there are timestamps, I could load the transcription into state, and 
compare it with the currentTime of the audio player to decide which line to highlight, and scroll to. If it is not stored
in a file, it would likely be coming from an AI resource, which would need some kind of live socket connection, or a quick 
api call with file for the chosen song in the body of the request, before displaying it on the screen. 
