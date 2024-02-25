import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Reminder = () => {
  return (
    <Alert className='text-white w-[60vw] h-[50vh]'>  
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
            To personalize your responses you can Sign up for free.
      </AlertDescription>
    </Alert>
  );
}

export default Reminder