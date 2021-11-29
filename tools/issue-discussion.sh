#!/bin/bash
#
# usage: issue-discussion.sh [label]
#
# This script will generate a document for discussions on the open issues with the given label
#

set -eo pipefail

label=$1
if [ -z "$label" ]; then
    echo "usage: $0 [label]"
    echo "e.g.: $0 needs-priority"
    exit 1
fi

gh issue list -l $label -s open --json='title,url' | jq -r '.[] | "## \(.title) \n\nIssue: \(.url)\n\n- TBD \n \n \n"'
