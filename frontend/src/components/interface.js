import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Select,
  Input,
  Button,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';

const JobForumInterface = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    company: '',
    year: '',
    jobType: ''
  });
  const [searchJobId, setSearchJobId] = useState('');

  useEffect(() => {
    // TODO: Fetch jobs from API based on filters
    // For now, we'll use mock data
    const mockJobs = [
      { id: 'META001', company: 'Meta', year: '2025', jobType: 'Summer Intern', title: 'SWE Intern' },
      { id: 'GOOG001', company: 'Google', year: '2025', jobType: 'Full-time', title: 'Software Engineer' },
      // Add more mock jobs as needed
    ];
    setJobs(mockJobs);
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleJobIdSearch = () => {
    // TODO: Implement job ID search
    console.log('Searching for job ID:', searchJobId);
  };

  return (
    <Box maxWidth="1200px" margin="0 auto" padding={5}>
      <Heading as="h1" size="xl" marginBottom={6}>Jobhub</Heading>
      
      <HStack spacing={4} marginBottom={6} flexWrap="wrap">
        <Select 
          name="company" 
          onChange={handleFilterChange} 
          value={filters.company}
          placeholder="All Companies"
        >
          <option value="Meta">Meta</option>
          <option value="Google">Google</option>
          {/* Add more companies */}
        </Select>
        <Select 
          name="year" 
          onChange={handleFilterChange} 
          value={filters.year}
          placeholder="All Years"
        >
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          {/* Add more years */}
        </Select>
        <Select 
          name="jobType" 
          onChange={handleFilterChange} 
          value={filters.jobType}
          placeholder="All Job Types"
        >
          <option value="Summer Intern">Summer Intern</option>
          <option value="Full-time">Full-time</option>
          {/* Add more job types */}
        </Select>
      </HStack>

      <HStack spacing={4} marginBottom={6}>
        <Input
          placeholder="Search by Job ID"
          value={searchJobId}
          onChange={(e) => setSearchJobId(e.target.value)}
        />
        <Button onClick={handleJobIdSearch} colorScheme="blue">Search</Button>
      </HStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {jobs.map((job) => (
          <Card key={job.id} cursor="pointer">
            <CardHeader>
              <Heading size="md">{job.title}</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={2}>
                <Text>Company: {job.company}</Text>
                <Text>Year: {job.year}</Text>
                <Text>Job Type: {job.jobType}</Text>
                <Text>Job ID: {job.id}</Text>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default JobForumInterface;