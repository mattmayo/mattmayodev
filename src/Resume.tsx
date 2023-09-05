import resumeJson from './assets/resume.json'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export default function Resume() {
    return (
        <>
            <div>
                <Typography variant="h4">{resumeJson.basicInfo.name}</Typography>
                <Link variant="body1" href={resumeJson.basicInfo.linkedIn}>LinkedIn</Link>
                <br />
                <Link variant="body1" href={resumeJson.basicInfo.website}>mattmayo.com</Link>
            </div>
        </>
    )
}