package com.productrx.scorecards.common;

import java.util.ArrayList;
import java.util.List;


public class ScorecardException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	protected List<InfoItem> infoItems = new ArrayList<InfoItem>();
	private InfoItem infoItem = null;

	
	protected class InfoItem {

		public String errorContext = null;
		public int errorCode;
		public String errorText = null;

		/**
		 * @param contextCode
		 * @param errorCode
		 * @param errorText
		 */
		public InfoItem(String contextCode, int errorCode, String errorText) {

			this.errorContext = contextCode;
			this.errorCode = errorCode;
			this.errorText = errorText;
		}
	}

	/**
	 * @param errorContext
	 * @param errorCode
	 * @param errorMessage
	 */
	public ScorecardException (String errorContext, int errorCode, String errorMessage) {

		infoItem = new InfoItem(errorContext, errorCode, errorMessage);
		addInfo(errorContext, errorCode, errorMessage);
	}

	/**
	 * @param errorContext
	 * @param errorCode
	 * @param errorMessage
	 * @param cause
	 */
	public ScorecardException (String errorContext, int errorCode, String errorMessage, Throwable cause) {
		super();
		infoItem = new InfoItem(errorContext, errorCode, errorMessage);
	}

	public int getErrorCode() {

		return this.infoItem.errorCode;
	}

	public String getErrorText() {

		return this.infoItem.errorText;
	}

	public String getErrorContext() {

		return this.infoItem.errorContext;
	}

	/**
	 * @param errorContext
	 * @param errorCode
	 * @param errorText
	 * @return
	 */
	public ScorecardException addInfo(String errorContext, int errorCode, String errorText) {
		this.infoItems.add(new InfoItem(errorContext, errorCode, errorText));
		return this;
	}

	/**
	 * @return
	 */
	public int getCode() {
		int errCode = 0;

		for (int i = this.infoItems.size() - 1; i >= 0; i--) {
			InfoItem info = this.infoItems.get(i);
			errCode = info.errorCode;
		}
		return errCode;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Throwable#toString()
	 */
	public String toString() {
		String errorTxt = "";

		for (int i = this.infoItems.size() - 1; i >= 0; i--) {
			InfoItem info = this.infoItems.get(i);
			errorTxt = info.errorText;
		}
		return errorTxt;
	}

	/**
	 * @param builder
	 * @param throwable
	 */
	@SuppressWarnings("unused")
	private void appendException(StringBuilder builder, Throwable throwable) {
		if (throwable == null)
			return;
		appendException(builder, throwable.getCause());
		builder.append(throwable.toString());
		builder.append('\n');
	}
}
