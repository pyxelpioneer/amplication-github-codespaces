import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
  PasswordInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "./UserTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ProfileTitle } from "../profile/ProfileTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Username" source="username" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Name" source="name" />
        <TextInput label="Bio" multiline source="bio" />
        <TextInput label="Email" source="email" type="email" />
        <NumberInput step={1} label="Age" source="age" />
        <DateTimeInput label="Birth Date" source="birthDate" />
        <NumberInput label="Score" source="score" />
        <ReferenceInput source="manager.id" reference="User" label="Manager">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="employees"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizations"
          reference="Organization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          label="Interests"
          source="interests"
          choices={[
            { label: "Programming", value: "programming" },
            { label: "Design", value: "design" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="priority"
          label="Priority"
          choices={[
            { label: "High", value: "high" },
            { label: "Medium", value: "medium" },
            { label: "Low", value: "low" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="Is Curious" source="isCurious" />
        <TextInput label="Location" source="location" />
        <div />
        <ReferenceInput source="profile.id" reference="Profile" label="Profile">
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
