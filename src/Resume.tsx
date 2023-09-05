import resumeJson from './assets/resume.json'
import Link from '@mui/material/Link'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'

export default function Resume() {
  return (
    <>
      <div>
        <Typography variant="h4">{resumeJson.basicInfo.name}</Typography>
        <Link variant="body1" href={resumeJson.basicInfo.linkedIn}>
          LinkedIn
        </Link>
        <br />
        <Link variant="body1" href={resumeJson.basicInfo.website}>
          mattmayo.com
        </Link>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent>
              {resumeJson.jobs[0].startDate} - {resumeJson.jobs[0].endDate}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>TBD</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>TBD</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>TBD</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  )
}
