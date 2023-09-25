import resumeJson from './assets/resume.json'
import Box from '@mui/material/Box'
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
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resumeJson.jobs.map((job) => (
            <TableRow key={job.company}>
              <TableCell>
                <Typography variant="h6">{job.company}</Typography>
                <Typography variant="body1">{job.role}</Typography>
                <Typography variant="body2">
                  {/* Using replace to address issue with Safari browser not being able to parse date */}
                  {dayjs(job.startDate.replace(/-/g, '/')).format('MMM YYYY')} -{' '}
                  {dayjs(job.endDate.replace(/-/g, '/')).format('MMM YYYY')}
                </Typography>
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
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab key={0} label="Role" />
            <Tab key={1} label="Technical" />
            <Tab key={2} label="Leadership" />
          </Tabs>
        </Box>
        {displayJobTable(tabValue)}
      </div>
    </>
  )
}
