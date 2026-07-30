# Day 08 - GTM Lead Form Tracking Sketch

## Goal

Track when a visitor successfully submits a lead form.

---

## Tags

### 1. GA4 Event Tag

Purpose:
Send a "lead_form_submit" event to Google Analytics 4.

Event Name:

lead_form_submit

---

### 2. Google Ads Conversion Tag (Optional)

Purpose:
Track conversions from Google Ads campaigns.

---

## Trigger

Trigger Type:
Form Submission

Conditions:

- Form ID = contact-form
OR
- Page URL contains /contact
OR
- Form successfully submitted

Trigger Name:

Lead Form Submission

---

## Variables

### Built-in Variables

- Page URL
- Click Text
- Click Classes
- Form ID
- Form Classes

### Custom Variables

Lead Type

Examples:

- Demo Request
- Contact Us
- Newsletter

User Type

Examples:

- New Visitor
- Returning Visitor

---

## Tracking Flow

Visitor opens website
        ↓
Visitor fills form
        ↓
Clicks Submit
        ↓
Trigger fires
        ↓
GA4 Event Tag fires
        ↓
Google Analytics records conversion