import * as dummyData from '../assets/dummyData.json'

export const allCardData: any = () => {
  const data = dummyData.data
  return data.map((d: any) => singleCardData(d))
  // return data.map((d: any, i) => ({ clientName: i }))
}

const singleCardData = (proj: any) => {
  const project = proj.project
  const projObj = {
    clientName: project.program.name,
    projectName: project.name,
    campaignID: 'placeholder',
    currentTask: proj.name,
    dueDate: project.plannedCompletionDate,
    projectStatus: project.status,
    assignedDev: proj.assignedTo,
    assignedMembers: allAssignedToProject(proj),
    testLink: getTestURL(proj),
    headshots: getHeadshots(proj)
  }
  return projObj
}

const allAssignedToProject = (project: any) => {
  const allAssigned = getAssigned(project)
  const noNull = allAssigned.filter((a: any) => a !== null)
  const filtered = new Map(noNull.map((e: any) => [e.ID, e]))
  return Array.from(filtered.values())
}

const getTestURL = (proj: any) => {
  const testUrl = proj.project.tasks.filter((t: any) => t.parameterValues['DE:Bespoke Build Test Link'])
  if (!testUrl[0]) return
  return testUrl[0].parameterValues['DE:Bespoke Build Test Link']
}

const getAssigned = (proj: any) => {
  const assigned = proj.project.tasks.map((task: any) => {
    return task.assignedTo
  })
  return assigned
}

const getHeadshots = (project: any) => {
  const allAssigned = allAssignedToProject(project)
  const headshots = allAssigned.map((a: any) => {
    return a.avatarDownloadURL
  })
  return headshots
}
