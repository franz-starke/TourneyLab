# CreateTournament.vue

> Component for creating a new tournament, including form fields for tournament parameters, referee assignment, and validation.

---

## Component: `CreateTournament`

### Description

The `CreateTournament` component provides a form for users to create a new tournament. It includes fields for tournament name, number of fields, teams, groups, and additional options like round duration and break duration. It also manages referee assignment and validation of tournament parameters.

---

### Example Usage

```vue
<CreateTournament />
```

---

### Features

- Form for tournament creation with validation.
- Dynamic fields for teams, groups, and referees.
- Modal dialog for referee assignment.
- Uses Pinia store for state management.
- Responsive layout with Tailwind CSS.

---

### File Location

`src/components/CreateTournament.vue`