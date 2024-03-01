import { useNavigate, useOutletContext } from "@remix-run/react";

import { css } from "styled-system/css";
import {
  closeRing1Icon,
  doneRoundIcon,
  timeAttackIcon,
  trashIcon,
} from "assets";
import useClickOutside from "~/hooks/use-click-outside";
import { useAddTaskViewModel } from "./add-task.view-model";
import { TaskRepository } from "domain/repository/task-repository";
import { FormEvent } from "react";

export default function AddTaskRoute() {
  const navigate = useNavigate();

  const taskRepository = useOutletContext<TaskRepository | undefined>();

  const { addTaskModalRef } = useAddTaskViewModel(taskRepository);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    console.log(e.currentTarget, "arjun current target");
    // handleAddTask()
  }

  function handleClose() {
    navigate(-1);
  }

  useClickOutside(addTaskModalRef, handleClose);

  return (
    <article
      className={css({
        position: "fixed",
        top: 0,
        left: 0,
        w: "100%",
        h: "100%",
        bg: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <form
        onSubmit={handleSubmit}
        className={css({
          bg: "white",
          p: "20px",
          borderRadius: "lg",
          w: "95vw",
        })}
        ref={addTaskModalRef}
      >
        <header
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          })}
        >
          <h1 className={css({ fontWeight: "medium", fontSize: "xl" })}>
            Task details
          </h1>
          <button onClick={handleClose}>
            <img
              alt=""
              src={closeRing1Icon}
              className={css({
                border: "1px solid",
                borderColor: "gray.300",
                borderRadius: "lg",
                p: "2",
                _hover: { bg: "gray.100" },
              })}
            />
          </button>
        </header>

        <div className={css({ mt: "4  " })}>
          <label
            htmlFor="task_name"
            className={css({ color: "gray.400", fontSize: "sm" })}
          >
            Task name
          </label>
          <input
            type="text"
            name="task_name"
            className={css({
              w: "full",
              h: "10",
              mt: "1",
              p: "3",
              border: "2px solid",
              borderRadius: "lg",
              borderColor: "gray.200",
              _focus: { outlineColor: "teal.400" },
            })}
          />
        </div>

        <div className={css({ mt: "4  " })}>
          <label
            htmlFor="description"
            className={css({ color: "gray.400", fontSize: "sm" })}
          >
            Description
          </label>
          <textarea
            name="description"
            className={css({
              w: "full",
              h: "40",
              mt: "1",
              p: "3",
              border: "2px solid",
              borderRadius: "lg",
              borderColor: "gray.200",
              resize: "none",
              _focus: { outlineColor: "teal.400" },
            })}
          />
        </div>

        <div className={css({ mt: "4" })}>
          <p className={css({ color: "gray.400", fontSize: "sm" })}>Icon</p>
          <div className={css({ display: "flex", gap: "3" })}>
            <button
              className={css({
                borderRadius: "lg",
                bg: "gray.200",
                p: "3",
                _hover: { bg: "gray.300" },
              })}
            >
              <img alt="" src={closeRing1Icon} />
            </button>
            <button
              className={css({
                borderRadius: "lg",
                bg: "gray.200",
                p: "3",
                _hover: { bg: "gray.300" },
              })}
            >
              <img alt="" src={closeRing1Icon} />
            </button>
            <button
              className={css({
                borderRadius: "lg",
                bg: "gray.200",
                p: "3",
                _hover: { bg: "gray.300" },
              })}
            >
              <img alt="" src={closeRing1Icon} />
            </button>
          </div>
        </div>

        <div className={css({ mt: "4" })}>
          <p className={css({ color: "gray.400", fontSize: "sm" })}>Status</p>
          <div
            className={css({
              display: "flex",
              gap: "4",
              flexWrap: "wrap",
              rowGap: "2",
            })}
          >
            <button
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "3",
                borderRadius: "xl",
                border: "2px solid",
                borderColor: "gray.200",
                p: "1",
                w: "64",
                _focus: { borderColor: "teal.400" },
              })}
            >
              <img
                alt=""
                src={timeAttackIcon}
                className={css({
                  bg: "orange.300",
                  borderRadius: "xl",
                  p: "3",
                })}
              />
              <p>In Progress</p>
            </button>
            <button
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "3",
                borderRadius: "xl",
                border: "2px solid",
                borderColor: "gray.200",
                p: "1",
                w: "64",
                _focus: { borderColor: "teal.400" },
              })}
            >
              <img
                alt=""
                src={timeAttackIcon}
                className={css({
                  bg: "green.400",
                  borderRadius: "xl",
                  p: "3",
                })}
              />
              <p>Completed</p>
            </button>
            <button
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "3",
                borderRadius: "xl",
                border: "2px solid",
                borderColor: "gray.200",
                p: "1",
                w: "64",
                _focus: { borderColor: "teal.400" },
              })}
            >
              <img
                alt=""
                src={timeAttackIcon}
                className={css({
                  bg: "red.400",
                  borderRadius: "xl",
                  p: "3",
                })}
              />
              <p>Won&apos;t do</p>
            </button>
          </div>
        </div>

        <div
          className={css({
            mt: "14",
            display: "flex",
            w: "full",
            justifyContent: "flex-end",
            gap: "3",
          })}
        >
          <button
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "2",
              px: "5",
              py: "2",
              bg: "slate.400",
              color: "white",
              borderRadius: "full",
              _hover: { bg: "slate.500" },
            })}
          >
            <p>Delete</p>
            <img alt="" src={trashIcon} />
          </button>
          <button
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "2",
              px: "5",
              py: "2",
              bg: "blue.400",
              color: "white",
              borderRadius: "full",
              _hover: { bg: "blue.500" },
            })}
          >
            <p>Save</p>
            <img alt="" src={doneRoundIcon} />
          </button>
        </div>
      </form>
    </article>
  );
}
