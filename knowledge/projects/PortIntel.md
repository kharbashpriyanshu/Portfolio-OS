# PortIntel

**Automated Reconnaissance Platform**

## Overview

An intelligence correlation and automated reconnaissance platform designed to map assets and cross-reference vulnerabilities with the NVD database.

## Problem Statement

Legacy reconnaissance scripts lack standardized vulnerability scoring, suffer from NVD rate-limiting failures, and generate unstructured reports that complicate VAPT audits.

## Why I Built It

To standardize risk scoring and automate the tedious asset mapping phase of vulnerability assessment and penetration testing (VAPT).

## Architecture

- **Discovery**: Asset Discovery, CPE Resolution Engine
- **Intelligence**: NVD Threat Intel API, CVSS v3.1 Risk Report

## Technology Stack

Python, NVD REST API, Pytest

## Features

- Standardized CVSS v3.1 risk scoring
- Automated CVE correlation
- NVD integration
- Scanning engine

## Engineering Decisions

- Implemented exponential backoff with randomized jitter to handle NVD API rate limits without dropping scans.
- Standardized all risk reporting to CVSS v3.1 vectors so security teams can directly import results into VAPT audit reports.

## Security Considerations

- Authenticated NVD threat intelligence client to ensure trusted data sources.

## Challenges

- Handling upstream NVD API rate limits and connection drops without aborting long-running reconnaissance scans.
- Eliminating tracked cache artifacts and standardizing modular package layouts across diverse test environments.

## Lessons Learned

- Exponential backoff with randomized jitter is mandatory for reliable integration with external CVE threat intelligence APIs.
- Rigorous static analysis and test automation prevent security regressions during repository consolidation.

## Current Status

**Completed**
Impact: Scanning Engine, CVE Correlation, NVD integration, Standardized CVSS v3.1 risk scoring, 45-test regression suite verified.

## Future Improvements (Roadmap)

- Automated vulnerability remediation ticket export for Jira and Linear.
- Real-time CVE feed streaming with webhook notifications.

## Repository

https://github.com/kharbashpriyanshu/PortIntel

## Screenshots

Pending Content
