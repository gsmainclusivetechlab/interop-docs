---
title: User Groups
sidebar_label: User Groups
---

User groups are a useful feature to share test sessions within a team.
Additionally, configuration options for new sessions can be attached to the user
group to allow simpler session creation.

## Creating a User Group

Platform administrators can create a new user group by clicking on the cog in
the top right corner of the page, and then selecting "Groups". From this page, a
"New Group" button is displayed.

![New Group Form](/img/create-group.png)

Each new group requires a name, and must also define one or more email filters.
These email filters are used to ensure users cannot accidentally be invited to
join a group to which they should not have access. To allow access to all users
of a particular email domain, you can add a filter that looks like
`@my-domain.com`. This will allow `john@my-domain.com` and `jane@my-domain.com`
to both be invited to the group. Alternatively, if you would like to restrict
access to the group to a specific set of email addresses, you can enter the
entire email addresses as a filter directly.

## Inviting Users

All new groups are empty to start with. To invite a new user, click on the
"Invitations" tab on a group page, and then click on "Invite Member". You will
be able to enter the email address of the user you wish to invite. Note that
this email address must match the filter that was defined when the group was
created.

An invitation email will be sent to the email address, which will contain a
registration link. After completing the registration form, the user will be able
to log in, and will automatically be a member of the group.

The first user to join a group is automatically marked as a group admin. Group
admins can invite and promote other users to the role of group admin. In this
way, the platform administrator can invite a single group admin, and allow them
to invite any other team members as required.

In some cases, someone may already have a user account as part of a different
group. For example, a GSMA developer may wish to be invited to multiple user
groups for member organisations, in order to assist with their tests. In this
case, it will not be possible to create a new invitation in the normal way.
Instead, a group admin can click the "Add Member" button on the "Members" tab of
the group page, and select the user directly. Note that the user's email address
will still need to match the group's domain filters as if they were being
invited directly.

Changing a group's email filters can only be done by a platform administrator.
To do this, click on the cog in the top right corner of the page, and then
select "Groups". By clicking the three dots to the right of a group's name, the
admin can select "Edit" and adjust the email filter as desired.

## Group Environments

As an alternative to defining environment variables when a session is created,
it is possible for group members to create group environments with preconfigured
variables. This can be done from the "Environments" tab of the group page. A
group environment must be named so that it is recognisable when the session is
created. Any variable names can be used in a group environment, and their values
will be merged with those that have already been provided by the user when a
session is created.

In addition to being more convenient to define environment variables centrally,
group environments can increase security by reducing the number of people who
need to have access to sensitive data. For example, JWS private keys can be
uploaded to a group environment without giving access to the keys themselves to
group users.

## Group Certificates

Just as environment variables can be preconfigured to avoid re-entry when a
session is created, so can encrypted connection details. this is done from the
"Certificates" tab of the group page. A name must be provided for the
certificate collection, so that it can be chosen when a session is created.
After this, a CA certificate can be provided (for ITP to validate the
authenticity of a server SUT), along with a signed client certificate (for ITP
to use to prove its own identity to a server SUT). In order to help generate
this signed client certificate, a button is also available on this page to
download a Certificate Signing Request (CSR) from ITP.

For more details about encryption certifictes, see
[Secure Connections](./security).
