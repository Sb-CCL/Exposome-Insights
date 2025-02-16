import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ShieldAlert } from "lucide-react";
import { useTicketsContext } from "@/hooks/useTicketsContext";
import { useAuthContext } from "@/hooks/useAuthContext";

const TicketForm = () => {
  const { dispatch } = useTicketsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Active");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const ticket = { title, priority, status, description };

    const response = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(ticket),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setPriority("Low");
      setStatus("Active");
      setDescription("");
      setError(null);
      dispatch({ type: "CREATE_TICKETS", payload: json });
    }
  };

  return (
    <div>
      <Card className='mx-auto lg:w-96 md:w-72 max-w-sm'>
        <form method='post' onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className='text-xl flex justify-center'>
              Create Ticket
            </CardTitle>
            <CardDescription className='flex justify-center text-muted-foreground'>
              Enter your ticket details
            </CardDescription>
          </CardHeader>

          <CardContent className='text-left'>
            {error && (
              <div className='error-message'>
                <span className='flex uppercase px-2 py-1 mr-1'>
                  <ShieldAlert />
                </span>
                <span className='font-bold text-sm text-left flex-auto'>
                  {error}
                </span>
              </div>
            )}
            <div className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='first-name'>Title</Label>
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type='text'
                  name='title'
                  id='title'
                  placeholder='Title'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='priority'>Priority</Label>
                <Select
                  value={priority}
                  onValueChange={(value) => setPriority(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Low' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Low'>Low</SelectItem>
                    <SelectItem value='Medium'>Medium</SelectItem>
                    <SelectItem value='High'>High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='status'>Status</Label>
                <Select
                  value={status}
                  onValueChange={(value) => setStatus(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder='Active' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Active'>Active</SelectItem>
                    <SelectItem value='Closed'>Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='description'>Description</Label>
                <Textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  name='description'
                  placeholder='Type your description here...'
                  id='description'
                  required
                />
              </div>
              <Button variant='scarlet' type='submit' className='w-full'>
                Submit
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default TicketForm;
