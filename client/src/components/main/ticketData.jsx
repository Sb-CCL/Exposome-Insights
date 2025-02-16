import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import formatDate from "@/lib/formatDate";
import { FileEditIcon, TrashIcon, PencilIcon, ShieldAlert } from "lucide-react";
import { useTicketsContext } from "@/hooks/useTicketsContext";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { useTheme } from "next-themes";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useAuthContext } from "@/hooks/useAuthContext";

const TicketData = () => {
  const { theme } = useTheme();
  const { user } = useAuthContext();

  const { tickets, dispatch } = useTicketsContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTicket, setEditingTicket] = useState(null);
  const [editedTicket, setEditedTicket] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
  });

  const priorityOptions = ["Low", "Medium", "High"];
  const statusOptions = ["Active", "Closed"];

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/api/tickets", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          const json = await response.json();
          throw new Error(json.error || "Request failed");
        }

        const json = await response.json();
        dispatch({ type: "SET_TICKETS", payload: json });
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setError(error.toString());
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    if (user) {
      fetchTickets();
    }
  }, [dispatch, user]);

  const handleDelete = async (ticket) => {
    if (!user) {
      return;
    }

    try {
      const response = await fetch(`/api/tickets/${ticket._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete ticket");
      }

      dispatch({ type: "DELETE_TICKETS", payload: ticket });
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  const handleEdit = (ticket) => {
    setEditingTicket(ticket);
    setEditedTicket({
      title: ticket.title,
      description: ticket.description,
      priority: ticket.priority,
      status: ticket.status,
    });
  };

  const handleSaveEdit = async () => {
    if (
      editedTicket.title.trim() === "" ||
      editedTicket.description.trim() === ""
    ) {
      setError(
        "Looks like you forgot to add a title or description. Please make sure to fill in both fields before proceeding."
      );
      return;
    }

    const updatedTicket = {
      ...editingTicket,
      title: editedTicket.title.trim(),
      description: editedTicket.description.trim(),
      priority: editedTicket.priority,
      status: editedTicket.status,
    };

    try {
      const response = await fetch(`/api/tickets/${editingTicket._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(updatedTicket),
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || "Failed to update ticket");
      }

      setError(null);

      dispatch({ type: "UPDATE_TICKETS", payload: updatedTicket });
      setEditingTicket(null);
      setEditedTicket({
        title: "",
        description: "",
        priority: "",
        status: "",
      });
    } catch (error) {
      setError(error.message);
      console.error("Error updating ticket:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingTicket(null);
    setEditedTicket({
      title: "",
      description: "",
      priority: "",
      status: "",
    });
  };

  return (
    <>
      <div className='order-last md:order-first lg:order-first'>
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

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {isLoading ? (
            tickets.map((ticket) => (
              <Card
                key={ticket._id}
                className='flex flex-col justify-between p-5 h-full'
              >
                <div className='text-xs pb-4 flex justify-center text-muted-foreground'>
                  <Skeleton className='w-20 h-[13px] rounded-sm' />
                </div>
                <CardTitle className='flex justify-center'>
                  <Skeleton className='w-[150px] h-[20px] rounded-sm' />
                </CardTitle>
                <CardDescription className='flex flex-col justify-between flex-grow'>
                  <div className='grid pt-5 pb-3 flex-grow gap-1'>
                    <Skeleton className='w-1/2 h-[15px] rounded-sm' />
                    <Skeleton className='flex-grow h-[15px] rounded-sm' />
                    <Skeleton className='w-[180px] h-[15px] rounded-sm' />
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                      <Skeleton className='w-[50px] h-[20px] rounded-sm' />
                      <Skeleton className='w-[50px] h-[20px] rounded-sm' />
                    </div>
                    <div className='flex items-center gap-2'>
                      <Skeleton className='w-[30px] h-[30px] rounded-sm' />
                      <Skeleton className='w-[30px] h-[30px] rounded-sm' />
                    </div>
                  </div>
                </CardDescription>
              </Card>
            ))
          ) : tickets.length === 0 ? (
            <Card>
              <CardContent className='flex justify-center items-center pt-5'>
                <div className='text-muted-foreground'>No tickets.</div>
              </CardContent>
            </Card>
          ) : (
            tickets.map((ticket) => {
              return (
                <Card
                  key={ticket._id}
                  className='flex flex-col justify-between p-5 h-full'
                >
                  <div className='text-xs pb-3 text-muted-foreground'>
                    {formatDate(ticket.createdAt)}
                  </div>
                  {editingTicket === ticket ? (
                    <div className='space-y-3 text-left'>
                      <div className='grid gap-2'>
                        <Label htmlFor='title'>Title</Label>
                        <Input
                          type='text'
                          value={editedTicket.title}
                          onChange={(e) =>
                            setEditedTicket((prevState) => ({
                              ...prevState,
                              title: e.target.value,
                            }))
                          }
                          maxLength={100}
                        />
                      </div>

                      <div className='grid gap-2'>
                        <Label htmlFor='description'>Description</Label>
                        <Textarea
                          type='text'
                          value={editedTicket.description}
                          onChange={(e) =>
                            setEditedTicket((prevState) => ({
                              ...prevState,
                              description: e.target.value,
                            }))
                          }
                          maxLength={100}
                        />
                      </div>

                      <div className='grid gap-2'>
                        <Label htmlFor='priority'>Priority</Label>
                        <Select
                          value={editedTicket.priority}
                          onValueChange={(selectedOption) =>
                            setEditedTicket((prevState) => ({
                              ...prevState,
                              priority: selectedOption,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue
                              placeholder={editedTicket.priority || "Low"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {priorityOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className='grid gap-2'>
                        <Label htmlFor='status'>Status</Label>
                        <Select
                          value={editedTicket.status}
                          onValueChange={(selectedOption) =>
                            setEditedTicket((prevState) => ({
                              ...prevState,
                              status: selectedOption,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue
                              placeholder={editedTicket.status || "Active"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {statusOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className='space-x-2 flex justify-center'>
                        <Button
                          size='sm'
                          variant={theme == "dark" ? "gray" : "default"}
                          onClick={handleSaveEdit}
                        >
                          Save
                        </Button>
                        <Button
                          size='sm'
                          variant='scarlet'
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <CardTitle>{ticket.title}</CardTitle>
                      <CardDescription className='flex flex-col justify-between flex-grow'>
                        <div className='pt-4 flex-grow text-left text-muted-foreground'>
                          {ticket.description}
                        </div>
                        <div className='flex justify-between items-center'>
                          <div className='flex items-center gap-2'>
                            <span
                              className={`px-2 py-1 rounded-sm text-xs font-medium ${
                                ticket.priority === "Low"
                                  ? "bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-400"
                                  : ticket.priority === "Medium"
                                  ? "bg-yellow-100 text-yellow-500 dark:bg-yellow-900 dark:text-yellow-400"
                                  : "bg-red-100 text-red-500 dark:bg-[#ba0c2f] dark:text-white/85"
                              }`}
                            >
                              {ticket.priority}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-sm text-xs font-medium ${
                                ticket.status === "Active"
                                  ? "bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-400"
                                  : "bg-red-100 text-red-500 dark:bg-[#ba0c2f] dark:text-white/85"
                              }`}
                            >
                              {ticket.status}
                            </span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <Button
                              onClick={() => handleEdit(ticket)}
                              size='icon'
                              variant='outline'
                            >
                              <FileEditIcon className='h-4 w-4' />
                              <span className='sr-only'>Edit</span>
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant='outline'>
                                  <TrashIcon className='h-4 w-4' />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Delete for all eternity?
                                  </AlertDialogTitle>
                                  <div className='text-muted-foreground text-sm'>
                                    <p>
                                      Are you sure you want to permanently
                                      delete this? We can't undo it.
                                    </p>
                                  </div>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(ticket)}
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                      </CardDescription>
                    </>
                  )}
                </Card>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default TicketData;
