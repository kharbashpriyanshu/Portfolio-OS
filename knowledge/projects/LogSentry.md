# LogSentry

**Commercial-Grade SIEM & Detection Engine**

## Overview

LogSentry is an automated log normalization and real-time anomaly flagging platform built for modern security operations centers.

## Problem Statement

Security teams face alert fatigue from high-volume, unstructured log streams, leading to delayed incident triage and manual bottleneck analysis.

## Why I Built It

To streamline the incident response process and reduce MTTR by utilizing intelligent parsing and automated flagging of anomalies before they require human intervention.

## Architecture

- **Ingestion**: Raw Log Stream, Normalizer Engine
- **Analysis**: Gemini REST Analyzer
- **Presentation**: SOC Triage Dashboard

## Technology Stack

FastAPI, React, Docker, PostgreSQL, Gemini REST API

## Features

- Automated log normalization
- Real-time anomaly flagging
- SOC triage dashboard
- Zero-trust API isolation

## Engineering Decisions

- Chose a clean REST client over a monolithic SDK to minimize bundle size and prevent unhandled promise rejections.
- Implemented a read-only integration status monitor so analysts can debug provider configs without exposing secret keys.

## Security Considerations

- Zero-trust API key isolation via serverless environment variable boundary.
- Read-only Integration Status monitor without exposing sensitive credentials.

## Challenges

- Migrating from an unconfigured AI provider stub to an authenticated Gemini REST implementation without breaking UI contracts.
- Preventing silent UI failures during API rate-limiting or network timeouts via custom fallback decorators.

## Lessons Learned

- Enforcing strict separation between provider credentials and client bundles is essential for zero-trust UI architectures.
- Structured error boundary handling drastically improves analyst UX during incident response surges.

## Current Status

**Completed**
Impact: 116 Tests Passed, Automated log normalization and real-time anomaly flagging.

## Future Improvements (Roadmap)

- Multi-provider LLM failover routing with automated latency benchmarking.
- SIEM webhook ingestion for Splunk and ElasticSearch pipelines.

## Repository

https://github.com/kharbashpriyanshu/LogSentry

## Screenshots

Pending Content
