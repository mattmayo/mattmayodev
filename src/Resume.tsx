import resumeJson from './assets/resume.json'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import dayjs from 'dayjs'
import { useState } from 'react'

function displayJobTable(tabValue: number) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Dates</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resumeJson.jobs.map((job) => (
            <TableRow key={job.company}>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>
                {dayjs(job.startDate).format('MMM YYYY')} -{' '}
                {dayjs(job.endDate).format('MMM YYYY')}
              </TableCell>
              <TableCell>{displayJobDescripton(job, tabValue)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function displayJobDescripton(job: any, tabValue: number) {
  let description = job.description
  if (tabValue == 1) description = job.technicalHighlights
  if (tabValue == 2) description = job.leadershipHighlights

  return description.map((p: any) => <p key={p}>{p}</p>)
}

export default function Resume() {
  const [tabValue, setTabValue] = useState(0)

  function handleTabChange(_event: React.SyntheticEvent, newValue: number) {
    setTabValue(newValue)
  }

  return (
    <>
      <div>
        <Typography variant="h4" align="center">
          {resumeJson.basicInfo.name}
        </Typography>
        <Typography variant="body1" align="center">
          <Link href={resumeJson.basicInfo.linkedIn}>LinkedIn</Link>
        </Typography>
        <Typography variant="body1" align="center">
          <Link variant="body1" href={resumeJson.basicInfo.website}>
            mattmayo.com
          </Link>
        </Typography>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab key={0} label="Career" />
          <Tab key={1} label="Technical" />
          <Tab key={2} label="Leadership" />
        </Tabs>
        {displayJobTable(tabValue)}
      </div>
    </>
  )
}
