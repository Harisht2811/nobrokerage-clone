import { Box, FormControlLabel, Typography, Checkbox } from "@mui/material";
import Dropdownicon from '../src/assets/dropDownIcon.svg'
import { useState } from "react";
import _ from "lodash";

const checkboxes = [
  {
    label: "All",
    checked: false,
    key: "all",
  },
  {
    label: "View",
    checked: false,
    key: "view",
  },
  {
    label: "Create",
    checked: false,
    key: "create",
  },
  {
    label: "Edit",
    checked: false,
    key: "edit",
  },
  {
    label: "Delete",
    checked: false,
    key: "delete",
  },
  {
    label: "Not Applicable",
    checked: false,
    key: "not_applicable",
  },
];


const rolesManagement = [
  {
    "id": 1,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "dashboard",
    "label": "Dashboard",
    "submenus": [],
    "mainmenuid": null,
    "updated_at": "2023-03-31T07:14:23.5008+00:00",
    "inserted_at": "2023-03-31T07:14:23.5008+00:00",
    "displayorder": 1
  },
  {
    "id": 2,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "admin_management",
    "label": "Admin Management",
    "submenus": [
      {
        "id": 3,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "role management",
        "label": "Role management",
        "mainmenuid": 2,
        "updated_at": "2023-04-05T07:36:26.104388+00:00",
        "inserted_at": "2023-04-05T07:36:26.104388+00:00",
        "displayorder": 1
      },
      {
        "id": 4,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Admin user management",
        "label": "Admin user management",
        "mainmenuid": 2,
        "updated_at": "2023-04-05T12:42:58.163724+00:00",
        "inserted_at": "2023-04-05T12:42:58.163724+00:00",
        "displayorder": 2
      }
    ],
    "mainmenuid": null,
    "updated_at": "2023-03-31T07:46:43.890438+00:00",
    "inserted_at": "2023-03-31T07:46:43.890438+00:00",
    "displayorder": 2
  },
  {
    "id": 6,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "All Students",
    "label": "All Students",
    "submenus": [],
    "mainmenuid": null,
    "updated_at": "2023-04-05T12:57:03.781605+00:00",
    "inserted_at": "2023-04-05T12:57:03.781605+00:00",
    "displayorder": 3
  },
  {
    "id": 7,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "Content Management",
    "label": "Content Management",
    "submenus": [
      {
        "id": 8,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Branches",
        "label": "Branches",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T12:58:13+00:00",
        "inserted_at": "2023-04-05T12:58:13+00:00",
        "displayorder": 1
      },
      {
        "id": 9,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Manage Courses",
        "label": "Manage Courses",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T12:58:37+00:00",
        "inserted_at": "2023-04-05T12:58:37+00:00",
        "displayorder": 2
      },
      {
        "id": 10,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Course Category",
        "label": "Course Category",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T12:59:02+00:00",
        "inserted_at": "2023-04-05T12:59:02+00:00",
        "displayorder": 3
      },
      {
        "id": 11,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Technology",
        "label": "Technology",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T12:59:41+00:00",
        "inserted_at": "2023-04-05T12:59:41+00:00",
        "displayorder": 4
      },
      {
        "id": 12,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Course Features",
        "label": "Course Features",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T13:00:06+00:00",
        "inserted_at": "2023-04-05T13:00:06+00:00",
        "displayorder": 5
      },
      {
        "id": 13,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Hiring Companies",
        "label": "Hiring Companies",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T13:00:40+00:00",
        "inserted_at": "2023-04-05T13:00:40+00:00",
        "displayorder": 6
      },
      {
        "id": 14,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Certificate",
        "label": "Certificate",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T13:01:07+00:00",
        "inserted_at": "2023-04-05T13:01:07+00:00",
        "displayorder": 7
      },
      {
        "id": 15,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Testimonials",
        "label": "Testimonials",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T13:01:34+00:00",
        "inserted_at": "2023-04-05T13:01:34+00:00",
        "displayorder": 8
      },
      {
        "id": 16,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Content Info",
        "label": "Content Info",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T13:01:58+00:00",
        "inserted_at": "2023-04-05T13:01:58+00:00",
        "displayorder": 9
      },
      {
        "id": 17,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Push Content",
        "label": "Push Content",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T13:02:24+00:00",
        "inserted_at": "2023-04-05T13:02:24+00:00",
        "displayorder": 10
      },
      {
        "id": 18,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Resources",
        "label": "Resources",
        "mainmenuid": 7,
        "updated_at": "2023-04-05T13:02:45+00:00",
        "inserted_at": "2023-04-05T13:02:45+00:00",
        "displayorder": 11
      }
    ],
    "mainmenuid": null,
    "updated_at": "2023-04-05T12:57:44.849338+00:00",
    "inserted_at": "2023-04-05T12:57:44.849338+00:00",
    "displayorder": 4
  },
  {
    "id": 19,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "Student Management",
    "label": "Student Management",
    "submenus": [],
    "mainmenuid": null,
    "updated_at": "2023-04-05T13:03:17.252441+00:00",
    "inserted_at": "2023-04-05T13:03:17.252441+00:00",
    "displayorder": 5
  },
  {
    "id": 20,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "Batch Management",
    "label": "Batch Management",
    "submenus": [],
    "mainmenuid": null,
    "updated_at": "2023-04-05T13:07:50.693238+00:00",
    "inserted_at": "2023-04-05T13:07:50.693238+00:00",
    "displayorder": 6
  },
  {
    "id": 21,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "Course Progress",
    "label": "Course Progress",
    "submenus": [],
    "mainmenuid": null,
    "updated_at": "2023-04-05T13:08:36.340394+00:00",
    "inserted_at": "2023-04-05T13:08:36.340394+00:00",
    "displayorder": 7
  },
  {
    "id": 22,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "Action Center",
    "label": "Action Center",
    "submenus": [
      {
        "id": 23,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Pending Payment",
        "label": "Pending Payment",
        "mainmenuid": 22,
        "updated_at": "2023-04-05T13:09:45.294469+00:00",
        "inserted_at": "2023-04-05T13:09:45.294469+00:00",
        "displayorder": 1
      },
      {
        "id": 24,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Daily Transactions",
        "label": "Daily Transactions",
        "mainmenuid": 22,
        "updated_at": "2023-04-05T13:10:30.292879+00:00",
        "inserted_at": "2023-04-05T13:10:30.292879+00:00",
        "displayorder": 2
      },
      {
        "id": 25,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Student Actions",
        "label": "Student Actions",
        "mainmenuid": 22,
        "updated_at": "2023-04-05T13:11:08.35999+00:00",
        "inserted_at": "2023-04-05T13:11:08.35999+00:00",
        "displayorder": 3
      },
      {
        "id": 26,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Student Actions Approval Queue",
        "label": "Student Actions Approval Queue",
        "mainmenuid": 22,
        "updated_at": "2023-04-05T13:12:03.479015+00:00",
        "inserted_at": "2023-04-05T13:12:03.479015+00:00",
        "displayorder": 4
      },
      {
        "id": 27,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Issue Refund / Adjust Payment",
        "label": "Issue Refund / Adjust Payment",
        "mainmenuid": 22,
        "updated_at": "2023-04-05T13:12:50.477186+00:00",
        "inserted_at": "2023-04-05T13:12:50.477186+00:00",
        "displayorder": 5
      },
      {
        "id": 28,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Completed Batches",
        "label": "Completed Batches",
        "mainmenuid": 22,
        "updated_at": "2023-04-05T13:13:18.978694+00:00",
        "inserted_at": "2023-04-05T13:13:18.978694+00:00",
        "displayorder": 6
      },
      {
        "id": 29,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Calculate Trainer Payment",
        "label": "Calculate Trainer Payment",
        "mainmenuid": 22,
        "updated_at": "2023-04-05T13:13:49.349301+00:00",
        "inserted_at": "2023-04-05T13:13:49.349301+00:00",
        "displayorder": 7
      },
      {
        "id": 30,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Process Trainer Payment",
        "label": "Process Trainer Payment",
        "mainmenuid": 22,
        "updated_at": "2023-04-05T13:14:21.121448+00:00",
        "inserted_at": "2023-04-05T13:14:21.121448+00:00",
        "displayorder": 8
      },
      {
        "id": 31,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Student Feedback / Concerns",
        "label": "Student Feedback / Concerns",
        "mainmenuid": 22,
        "updated_at": "2023-04-05T13:14:50.92224+00:00",
        "inserted_at": "2023-04-05T13:14:50.92224+00:00",
        "displayorder": 9
      },
      {
        "id": 32,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Session Feedback",
        "label": "Session Feedback",
        "mainmenuid": 22,
        "updated_at": "2023-04-05T13:15:16.806596+00:00",
        "inserted_at": "2023-04-05T13:15:16.806596+00:00",
        "displayorder": 10
      }
    ],
    "mainmenuid": null,
    "updated_at": "2023-04-05T13:09:07.963432+00:00",
    "inserted_at": "2023-04-05T13:09:07.963432+00:00",
    "displayorder": 8
  },
  {
    "id": 33,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "HR & Student Placement",
    "label": "HR & Student Placement",
    "submenus": [
      {
        "id": 34,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Manage Jobs",
        "label": "Manage Jobs",
        "mainmenuid": 33,
        "updated_at": "2023-04-05T13:16:21+00:00",
        "inserted_at": "2023-04-05T13:16:21+00:00",
        "displayorder": 1
      },
      {
        "id": 35,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": null,
        "label": "Student for HR",
        "mainmenuid": 33,
        "updated_at": "2023-04-05T13:17:19.44784+00:00",
        "inserted_at": "2023-04-05T13:17:19.44784+00:00",
        "displayorder": 2
      }
    ],
    "mainmenuid": null,
    "updated_at": "2023-04-05T13:15:50.380436+00:00",
    "inserted_at": "2023-04-05T13:15:50.380436+00:00",
    "displayorder": 9
  },
  {
    "id": 36,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "Reports",
    "label": "Reports",
    "submenus": [],
    "mainmenuid": null,
    "updated_at": "2023-04-05T13:17:43.345817+00:00",
    "inserted_at": "2023-04-05T13:17:43.345817+00:00",
    "displayorder": 10
  },
  {
    "id": 37,
    "data": [
      {
        "id": 1,
        "label": "All",
        "value": "all",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 2,
        "label": "View",
        "value": "view",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 3,
        "label": "Create",
        "value": "create",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 4,
        "label": "Edit",
        "value": "edit",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 5,
        "label": "Delete",
        "value": "delete",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      },
      {
        "id": 6,
        "label": "Not Applicable",
        "value": "not applicable",
        "checked": false,
        "updated_at": "2023-03-30T10:46:58.374035+00:00",
        "inserted_at": "2023-03-30T10:46:58.374035+00:00"
      }
    ],
    "idkey": "Logs",
    "label": "Logs",
    "submenus": [
      {
        "id": 38,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "User Logs",
        "label": "User Logs",
        "mainmenuid": 37,
        "updated_at": "2023-04-05T13:18:50.594434+00:00",
        "inserted_at": "2023-04-05T13:18:50.594434+00:00",
        "displayorder": 1
      },
      {
        "id": 39,
        "data": [
          {
            "id": 1,
            "label": "All",
            "value": "all",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 2,
            "label": "View",
            "value": "view",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 3,
            "label": "Create",
            "value": "create",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 4,
            "label": "Edit",
            "value": "edit",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 5,
            "label": "Delete",
            "value": "delete",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          },
          {
            "id": 6,
            "label": "Not Applicable",
            "value": "not applicable",
            "checked": false,
            "updated_at": "2023-03-30T10:46:58.374035+00:00",
            "inserted_at": "2023-03-30T10:46:58.374035+00:00"
          }
        ],
        "idkey": "Student Edit Logs",
        "label": "Student Edit Logs",
        "mainmenuid": 37,
        "updated_at": "2023-04-05T13:19:31.678525+00:00",
        "inserted_at": "2023-04-05T13:19:31.678525+00:00",
        "displayorder": 2
      }
    ],
    "mainmenuid": null,
    "updated_at": "2023-04-05T13:18:25.77344+00:00",
    "inserted_at": "2023-04-05T13:18:25.77344+00:00",
    "displayorder": 11
  }
]
console.log(rolesManagement)

// const rolesData = [
//   {
//     label: "Dashboard",
//     key: "dashboard",
//     data: _.cloneDeep(checkboxes),
//   },
//   {
//     label: "Admin Management",
//     key: "admin_management",
//     data: _.cloneDeep(checkboxes),
//     subMenus: [
//       {
//         parentKey: "admin_management",
//         label: "Role Management",
//         key: "role_management",
//         data: _.cloneDeep(checkboxes),
//       },
//       {
//         parentKey: "admin_management",
//         label: "Admin User Management",
//         key: "admin_user_management",
//         data: _.cloneDeep(checkboxes),
//       },
//     ],
//   },
//   {
//     label: "All Students",
//     key: "all_students",
//     data: _.cloneDeep(checkboxes),
//   },
//   {
//     label: "Content Management",
//     key: "content_management",
//     data: _.cloneDeep(checkboxes),
//     subMenus: [
//       {
//         parentKey: "content_management",
//         label: "Branches",
//         key: "branches",
//         data: _.cloneDeep(checkboxes),
//       },
//       {
//         parentKey: "content_management",
//         label: "Manage Courses",
//         key: "manage_courses",
//         data: _.cloneDeep(checkboxes),
//       },
//       {
//         parentKey: "content_management",
//         label: "Course Category",
//         key: "course_category",
//         data: _.cloneDeep(checkboxes),
//       },
//     ],
//   },
// ];
export const RoleManagement = () => {
  const [roles, setRoles] = useState(rolesManagement);
  const [isOpen , setisOpen] = useState(false);
 console.log(isOpen)
  const handleChecked = (e, col, row, colIndex) => {
    const checked = e.target.checked;
    const subMenus = row.submenus;
    const colKey = col.value;
    const updatedCol = { ...col, checked };
    const isMainMenu = !_.isEmpty(subMenus);
    let updatedRow = updateRowData(row, colKey, updatedCol, checked);

    if (isMainMenu) {
      const updatedSubmenus = row.submenus.map((menu) =>
        updateRowData(menu, colKey, updatedCol, checked)
      );

      updatedRow.subMenus = _.cloneDeep(updatedSubmenus);
      updateRoles(updatedRow);
    } else if (row.parentKey) {
      const index = roles.findIndex(
        (role) => role.idkey === updatedRow.parentKey
      );
      const parentRow = _.cloneDeep(roles[index]);

      const subIndex = parentRow.submenus.findIndex(
        (s) => s.idkey === updatedRow.idkey
      );

      parentRow.submenus[subIndex] = _.cloneDeep(updatedRow);
      updateRoles(_.cloneDeep(parentRow));
    }

    else {
      updateRoles(_.cloneDeep(updatedRow));
    }
  };

  const updateRowData = (row, colKey, updatedCol, checked) => {
    let updatedRow = { ...row };
    const colIndex = row.data.findIndex((c) => c.value === colKey);
    console.log(colIndex)
    if (colKey === "all") {
      updatedRow.data = [
        ...updatedRow.data.map((c) => {
          if (c.value !== "not applicable") {
            c.checked = checked;
            updatedRow.data[5].checked = false
          }
          return c;
        }),
      ];
    }
    else {
      updatedRow.data[colIndex] = _.cloneDeep(updatedCol);
      updatedRow.data.map((element) => {
        if (element.value != 'all' && element.value != 'not applicable') {
          if (element.checked == false) {
            checked = false
          }
          updatedRow.data[0].checked = checked
        }

      })
      if (colKey === 'not applicable') {
        updatedRow.data.map((element) => {
          if (element.value != 'not applicable') {
            if (updatedRow.data[5].checked === true) {
              element.checked = false
            }
          }

        })
      }
      else {
        updatedRow.data[5].checked = false
      }
    }
    return updatedRow;
  };

  const updateRoles = (updatedRow) => {
    const index = roles.findIndex((role) => role.idkey === updatedRow.idkey);
    let newRoles = [...roles];
    newRoles[index] = _.cloneDeep(updatedRow);
    console.log(newRoles);
    setRoles(_.cloneDeep(newRoles));
  };

  const renderColumns = (row) => {
    return row.data?.map((col, index) => (
      <Box minWidth={100}>
        <FormControlLabel
          label={col.label}
          control={
            <Checkbox
              key={index}
              checked={col.checked}
              onChange={(e) => handleChecked(e, col, row, index)}
            />
          }
        />
      </Box>
    ));
  };

  const renderRow = (row, isSubMenu = false,bgIndex) => {
    const subMenus = row.submenus;
    const hasSubMenu = !_.isEmpty(subMenus);
    return (
      <Box sx={{ mt: isSubMenu ? 0 : 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            background: (bgIndex % 2 !== 0 ) && !isSubMenu? "aliceblue" : "#fff",
            p: 2,
          }}
        >
          
          <Box width={300} textAlign="left" sx={{ pl: isSubMenu ? 2 : 0 }}>
            {row.label}
           {hasSubMenu === true ? <img  src={Dropdownicon} alt='dropDownIcon' onClick={() => setisOpen(!isOpen)}></img> : ''} 
          </Box>
          {renderColumns(row)}
        </Box>
        {hasSubMenu && renderRows(subMenus, hasSubMenu) }
      </Box>
    );
  };

  const renderRows = (rows, isSubMenu = false) => {
    return rows.map((row,index) => renderRow(row, isSubMenu,index));
  };

  return (
    <Box>
      
      <Typography variant="h5">Select Privileges</Typography>
      {renderRows(roles)}
    </Box>
  );
};