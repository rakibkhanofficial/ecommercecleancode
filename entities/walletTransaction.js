module.exports = (walletTransaction) => {

  let newWalletTransaction = { 
    walletId: walletTransaction.walletId,
    userId: walletTransaction.userId,
    forOrder: walletTransaction.forOrder,
    forWallet: walletTransaction.forWallet,
    transactionAmount: walletTransaction.transactionAmount,
    isActive: walletTransaction.isActive,
    createdAt: walletTransaction.createdAt,
    updatedAt: walletTransaction.updatedAt,
    addedBy: walletTransaction.addedBy,
    updatedBy: walletTransaction.updatedBy,
    isDeleted: walletTransaction.isDeleted,
  };

  // remove undefined values
  Object.keys(newWalletTransaction).forEach(key => newWalletTransaction[key] === undefined && delete newWalletTransaction[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newWalletTransaction) => {
   *   if (!newWalletTransaction.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newWalletTransaction) 
   */

  return Object.freeze(newWalletTransaction);
};
